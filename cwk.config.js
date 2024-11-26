export default {
  participants: ['David', 'Dylan'],
  title: 'Typescript node Workshop',
  target: 'terminal',
  targetOptions: {
    cmd: 'node index.ts',
  },
  templateData: {
    appTitle: 'ts-workshop',
    intro() {
      return `Hi ${this.participantName}, welcome to ${this.appTitle}!`;
    },
  },
};