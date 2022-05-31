const Config = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'test',
        'docs',
        'build',
        'refactor',
        'ci',
        'other',
      ],
    ],
    'references-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
  defaultIgnores: true,
  parserOpts: {
    headerCorrespondence: ['type', 'scope', 'subject', 'reference'],
  },
};

module.exports = Config;
