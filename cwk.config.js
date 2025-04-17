export default {
  // Note: Do not use spaces in these strings.
  participants: ['David', 'Dylan', 'Georg', 'Henk', 'James', 'Jeandre', 'Jondre', 'Kivesh', 'Luke', 'Nicholas', 'Sean', 'Shani', 'Stephan', 'Strijdom'],
  title: 'Typescript node Workshop',
  target: 'terminal',
  targetOptions: {
    cmd: 'node index.ts'
  },
  templateData: {
    appTitle: 'ts-workshop',

    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    }

  }
};
