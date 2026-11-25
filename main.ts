const ENTRY_TEXT = `Do not merge the pull request you wrote at 3am titled 'small fix': it is 400 lines, and it deletes the payment retry logic.
That night taught me that confidence scales with tiredness while competence does not, and nothing of mine has shipped without a witness since.`;

type Action = "print" | "help" | "error";

function usage(): string {
  return "Usage: node main.ts [--help]\n";
}

function parseArgs(args: string[]): Action {
  if (args.length === 0) {
    return "print";
  }

  if (args.length === 1 && args[0] === "--help") {
    return "help";
  }

  return "error";
}

function main(args: string[]): number {
  const action = parseArgs(args);

  if (action === "help") {
    process.stderr.write(usage());
    return 0;
  }

  if (action === "error") {
    process.stderr.write(usage());
    return 1;
  }

  process.stdout.write(`${ENTRY_TEXT}\n`);
  return 0;
}

process.exitCode = main(process.argv.slice(2));
