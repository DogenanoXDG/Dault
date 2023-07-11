import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PriceService {
  storeKey = `nanovault-price`;
  apiUrl = `https://api.coingecko.com/api/v3/coins/nano?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
  apiNanswap = `https://data.nanswap.com/get-markets`;
  
  price = {
    lastPrice: 0,
    lastPriceBTC: 0,
  };
  lastPrice$ = new BehaviorSubject(1);

  constructor(private http: HttpClient) {
    this.loadSavedPrice();
  }

  async getPrice(currency = 'USD') {
    if (!currency) return; // No currency defined, do not refetch
    const response: any = await this.http.get(`${this.apiUrl}`).toPromise();
    const nanswap: any = await this.http.get(`${this.apiNanswap}`).toPromise();
    if (!response) {
      return this.price.lastPrice;
    }

    const quote = response.market_data.current_price;
    const currencyPrice = quote[currency.toLowerCase()];
    const btcPrice = quote.btc;
    const multy = nanswap.find((c => c.key === "XDG/XNO")).midPrice;

    this.price.lastPrice = currencyPrice * multy;
    this.price.lastPriceBTC = btcPrice * multy;

    this.savePrice();

    this.lastPrice$.next(currencyPrice);

    return this.price.lastPrice;
  }

  loadSavedPrice() {
    const priceData = localStorage.getItem(this.storeKey);
    if (!priceData) return false;

    this.price = JSON.parse(priceData);
  }

  savePrice() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.price));
  }

}
