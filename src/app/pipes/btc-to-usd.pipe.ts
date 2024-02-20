import { Pipe, PipeTransform } from '@angular/core';

const BTC_USD = 52214.90;

@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd? amount * BTC_USD : amount / BTC_USD;
  }

}
