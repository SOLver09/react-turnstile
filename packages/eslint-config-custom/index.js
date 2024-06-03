module.exports = {
	extends: ['marsi/react-ts', 'prettier'],
	rules: {
		'no-control-regex': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'jsx-quotes': ['warn', 'prefer-double'],
		'react-hooks/exhaustive-deps': 'off'
	}
}
