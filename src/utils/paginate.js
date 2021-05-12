import _ from 'lodash';

export function paginate (items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
    //slice ile startIndex'den başla dilimlemeye ve take ile sayfada 
    //kaçtane öğeyi alacağı belirlenir
    //value ile düzenli bir diziye dönüştür
    //_.slice(items, startIndex) // startIndex'den başlayarak dilimleyecek
    //_.take()//dizi ve dizi eleman sayısı veriliyor dondermek için
}