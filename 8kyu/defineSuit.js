function defineSuit(card) {
   var suit = card.substr(-1);
   switch (suit) {
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      default: return 'spades';
   }
}