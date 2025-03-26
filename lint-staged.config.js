export default {
    "./eslint.config.js": ["eslint --fix"],
    "./lint-staged.config.js": ["eslint --fix"],
    "./jest.config.ts": ["eslint --fix"],
    "./web/**/*": ["eslint --fix"],
    "./react-native/**/*": ["eslint --fix"]
};
