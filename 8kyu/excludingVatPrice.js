function excludingVatPrice(price){
  return price == null ? -1 : +(price / 1.15).toFixed(2);
}