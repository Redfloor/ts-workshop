// <%= participantName %>CardDeckBrokenPrettified.ts
// This file intentionally contains wrong type definitions and operations for a Card Deck Simulator.
// Workshop participants should fix these issues so that all arithmetic and type operations work correctly,
// while keeping the prettified output.

// This type definition is correct, however, it's implementations will not be.
interface <%= participantName %>RightFaceCards {
  rank: number;
  name: 'Ace' | 'Jack' | 'Queen' | 'King';
}

// ❌ Incorrect type definitions:
// - 'suit' is intentionally typed as a number (should be a string, e.g., "Hearts").
// - 'rank' is intentionally typed as a string (should be a number for numeric comparisons).
interface <%= participantName %>WrongCard {
    suit: number;  // ❌ Expected: string
    rank: string;  // ❌ Expected: number
    face?: <%= participantName %>RightFaceCards;
  }

  // The deck holds multiple cards.
  interface <%= participantName %>WrongDeck {
    cards: <%= participantName %>WrongCard[];
  }

  // Create a new, full deck of cards.
  function <%= participantName %>CreateDeck(): <%= participantName %>WrongDeck {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deck: <%= participantName %>WrongCard[] = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        // Intentionally wrong:
        // - 'suit' is a string but our type expects a number.
        // - 'rank' is a number but our type expects a string.
        deck.push({ suit: suit, rank: rank });
      }
    }
    return { cards: deck };
  }

  // Shuffle the deck using the Fisher–Yates algorithm.
  function <%= participantName %>ShuffleDeck(deck: <%= participantName %>WrongDeck): <%= participantName %>WrongDeck {
    for (let i = deck.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }
    return deck;
  }

  // Deal a number of cards from the deck.
  // Although 'count' is intentionally a string, we convert it to a number here.
  function <%= participantName %>DealCards(deck: <%= participantName %>WrongDeck, count: string): <%= participantName %>WrongCard[] {
    return deck.cards.splice(0, count);
  }

  // Helper function to print a divider.
  function <%= participantName %>PrintDivider(): void {
    console.log('==========================================');
  }

  // Converts a suit (string) into its corresponding emoji.
  function <%= participantName %>SuitEmoji(suit: string): string {
    switch (suit.toLowerCase()) {
      case 'hearts': return '♥️';
      case 'diamonds': return '♦️';
      case 'clubs': return '♣️';
      case 'spades': return '♠️';
      default: return '';
    }
  }

  // Pretty print the deck.
  function <%= participantName %>PrintDeck(deck: <%= participantName %>WrongDeck): void {
    <%= participantName %>PrintDivider();
    console.log(`🃏 <%= participantName %> Card Deck Simulator`);
    <%= participantName %>PrintDivider();
    deck.cards.forEach((card, index) => {
      // ❌ Note: 'card.suit' is defined as a number, but here we expect it to be a string.
      console.log(`Card ${index + 1}: Suit - ${card.suit} ${<%= participantName %>SuitEmoji(card.suit as any)}, Rank - ${card.rank}`);
    });
    <%= participantName %>PrintDivider();
  }

  // Evaluate a hand for poker-related outcomes like a flush or a pair.
  function <%= participantName %>EvaluateHand(hand: <%= participantName %>WrongCard[]): void {
    console.log('🃏 Hand Evaluation:');

    // Check for flush: all cards must have the same suit.
    const suits = hand.map(card => card.suit);
    const flush = suits.every(s => s === suits[0]);

    // Check for pairs: count occurrences of each rank.
    const rankCount: { [key: string]: number } = {};
    hand.forEach(card => {
      rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
    });
    const pairs = Object.keys(rankCount).filter(rank => rankCount[rank] >= 2);

    if (flush) {
      console.log('🔥 Flush! All cards are of the same suit.');
    }
    if (pairs.length > 0) {
      pairs.forEach(rank => {
        console.log(`🤝 Pair found: Rank ${rank}`);
      });
    }
    if (!flush && pairs.length === 0) {
      console.log('😐 No significant hand detected.');
    }
    <%= participantName %>PrintDivider();
  }

  // -------------------
  // Sample Usage
  // -------------------
  (function () {
    try {
      const deck = <%= participantName %>CreateDeck();
      console.log('Deck created.');
      <%= participantName %>PrintDeck(deck);

      const shuffledDeck = <%= participantName %>ShuffleDeck(deck);
      console.log('Deck shuffled.');
      <%= participantName %>PrintDeck(shuffledDeck);

      const dealtHand = <%= participantName %>DealCards(shuffledDeck, "5");
      console.log(`Dealt Hand (${dealtHand.length} cards):`);
      dealtHand.forEach((card, index) => {
        console.log(`  Card ${index + 1}: Suit - ${card.suit} ${<%= participantName %>SuitEmoji(card.suit as any)}, Rank - ${card.rank}`);
      });
      dealtHand.forEach((card, index) => {
        console.log(`  Card face: ${card.face.name}`);
      });
      <%= participantName %>PrintDivider();

      <%= participantName %>EvaluateHand(dealtHand);

    } catch (error) {
      console.error('Error during card deck simulation:', error);
    }
  })();
