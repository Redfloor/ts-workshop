// This file intentionally contains wrong type definitions and data manipulations
// that will cause TypeScript errors. Workshop participants should fix the types
// so that all operations compile without errors, while keeping the prettified output.

interface WrongNamedAPIResource {
  name: string;
  url: string;
}

interface WrongPokemonAbility {
  is_hidden: string;  // ❌ Hint: this should be a boolean (true or false)
  slot: string;       // ❌ Hint: arithmetic operations are done on this value so it should be a number
  ability: string;    // ❌ Expected: an object with { name: string; url: string }
}

interface WrongPokemonType {
  slot: string;       // ❌ Hint: arithmetic operations are done on this value so it should be a number
  type: string;       // ❌ Expected: an object with { name: string; url: string }
}

interface WrongPokemon {
  id: string;         // ❌ Expected: number
  name: string;
  height: string;     // ❌ Expected: number
  weight: string;     // ❌ Expected: number
  abilities: WrongPokemonAbility[];
  types: WrongPokemonType[];
}

async function fetchPokemonData(pokemonName: string): Promise<WrongPokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  // For workshop purposes, we cast to the intentionally wrong type.
  return data as WrongPokemon;
}

// Helper function to print a divider.
function printDivider(): void {
  console.log('==========================================');
}

// Prints a prettified summary of the Pokémon details.
function printPokemonSummary(pokemon: WrongPokemon): void {
  printDivider();
  console.log('🐱 Pokémon Details');
  printDivider();
  console.log(`Name       : ${pokemon.name}`);
  // ❌ Intended error: id is a string, so adding 1 might result in concatenation rather than numeric addition.
  const nextId = pokemon.id + 1;
  // ❌ Errors: '*' operator cannot be applied to types 'string' and 'number'
  const doubleHeight = pokemon.height * 2;
  const doubleWeight = pokemon.weight * 2;
  console.log(`ID         : ${pokemon.id}`);
  console.log(`Next ID    : ${nextId}`);
  console.log(`Height     : ${pokemon.height} (Double: ${doubleHeight})`);
  console.log(`Weight     : ${pokemon.weight} (Double: ${doubleWeight})`);
  printDivider();
}

// Prints abilities with additional formatting.
function printPokemonAbilities(pokemon: WrongPokemon): void {
  console.log('🎯 Abilities:');
  // ❌ Error: Sorting by 'slot' will fail since 'slot' is a string.
  const sortedAbilities = [...pokemon.abilities].sort((a, b) => a.slot - b.slot);
  sortedAbilities.forEach((ability, index) => {
    // ❌ Error: 'ability' is defined as a string, so accessing its 'name' property is invalid.
    console.log(`  ${index + 1}. ${ability.ability.name}`);
    console.log(`     - Is Hidden: ${ability.is_hidden ? 'Yes' : 'No'}`);
    console.log(`     - Slot     : ${ability.slot}`);
  });
  printDivider();
}

// Prints Pokémon types with formatting.
function printPokemonTypes(pokemon: WrongPokemon): void {
  console.log('🔰 Types:');
  // ❌ Error: Sorting by 'slot' will fail since 'slot' is a string.
  const sortedTypes = [...pokemon.types].sort((a, b) => a.slot - b.slot);
  sortedTypes.forEach((ptype, index) => {
    // ❌ Error: 'type' is defined as a string, so accessing its 'name' property is invalid.
    console.log(`  ${index + 1}. ${ptype.type.name} (Slot: ${ptype.slot})`);
  });
  printDivider();
}

(async () => {
  try {
    const pokemon = await fetchPokemonData('pikachu');
    printPokemonSummary(pokemon);
    printPokemonAbilities(pokemon);
    printPokemonTypes(pokemon);
  } catch (error) {
    console.error('Error fetching or processing Pokémon data:', error);
  }
})();
