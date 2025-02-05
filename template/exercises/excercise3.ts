// spacexErrors.ts
// This file intentionally contains wrong type definitions and data manipulations
// that will cause TypeScript errors. Workshop participants are expected to fix
// the types and operations so that everything compiles and works correctly.

interface WrongSpaceXCore {
  // ❌ Incorrect: The API returns a string or null for 'core'
  core: number; // Expected: string | null
  // ❌ Incorrect: The API returns a number for 'flight'
  flight: string; // Expected: number
  // ❌ Incorrect: The API returns booleans for these flags.
  gridfins: string; // Expected: boolean
  legs: string;    // Expected: boolean
}

interface WrongSpaceXLaunch {
  // ❌ Incorrect: The API returns a number for 'flight_number'
  flight_number: string; // Expected: number
  name: string;
  // ❌ Incorrect: The API returns an ISO date string for 'date_utc'
  date_utc: number; // Expected: string
  // ❌ Incorrect: The API returns a boolean (or null) for 'success'
  success: string; // Expected: boolean | null
  cores: WrongSpaceXCore[];
}

async function fetchSpaceXLaunch(): Promise<WrongSpaceXLaunch> {
  const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  // Cast the API response to the intentionally wrong type.
  return data as WrongSpaceXLaunch;
}

// Helper function to print a divider.
function printDivider(): void {
  console.log('==========================================');
}

// Prints a prettified summary of the launch details.
function printLaunchSummary(launch: WrongSpaceXLaunch): void {
  printDivider();
  console.log('🚀 SpaceX Launch Details');
  printDivider();
  console.log(`Launch Name       : ${launch.name}`);
  // ❌ Error: Multiplying a string (flight_number) by 2.
  console.log(`Double Flight No. : ${launch.flight_number * 2}`);

  // ❌ Error: Attempting to use string methods on a number.
  const dateParts = launch.date_utc.split("-"); 
  console.log(`Launch Date Parts : ${dateParts.join(", ")}`);

  // ❌ Error: 'success' is defined as a string so the strict boolean check is invalid.
  console.log(`Success           : ${launch.success === true ? 'Yes' : 'No'}`);
  printDivider();
}

// Prints detailed information about each core.
function printCores(launch: WrongSpaceXLaunch): void {
  console.log('🛰️  Core Details');
  launch.cores.forEach((core, index) => {
    console.log(`\nCore ${index + 1}:`);
    // ❌ Error: core.core is defined as a number, so the nullish coalescing is invalid.
    console.log(`  Core ID   : ${core.core ?? "N/A"}`);
    // ❌ Error: core.flight is a string, so using it in arithmetic/sorting is problematic.
    console.log(`  Flight    : ${core.flight}`);
    // Using a strict boolean check on a string.
    console.log(`  Gridfins  : ${core.gridfins === true ? 'Yes' : 'No'}`);
    console.log(`  Legs      : ${core.legs === true ? 'Yes' : 'No'}`);
  });
  printDivider();
}

// Prints the cores sorted by their flight property.
function printSortedCores(launch: WrongSpaceXLaunch): void {
  // ❌ Error: Subtracting strings (core.flight) is not allowed.
  const sortedCores = [...launch.cores].sort((a, b) => a.flight - b.flight);
  console.log('🔍 Sorted Cores by Flight:');
  sortedCores.forEach((core, index) => {
    console.log(`  ${index + 1}. Flight: ${core.flight}, Core ID: ${core.core ?? "N/A"}`);
  });
  printDivider();
}

// Prints the launch year.
function printLaunchYear(launch: WrongSpaceXLaunch): void {
  // Although new Date() accepts a number, we expect date_utc to be a string.
  const launchDate = new Date(launch.date_utc);
  console.log(`📅 Launch Year: ${launchDate.getFullYear()}`);
  // ❌ Error: Attempting to call split on a number.
  console.log(`Launch Year (split): ${launch.date_utc.split("-")[0]}`);
  printDivider();
}

(async () => {
  try {
    const launch = await fetchSpaceXLaunch();
    printLaunchSummary(launch);
    printCores(launch);
    printSortedCores(launch);
    printLaunchYear(launch);
  } catch (error) {
    console.error('Error fetching or processing SpaceX launch data:', error);
  }
})();
