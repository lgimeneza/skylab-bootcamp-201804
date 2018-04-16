const res = toCamelCase('Hello My World');

console.log(
    'toCamelCase("Hello My World") should return "helloMyWorld"',
    res === 'helloMyWorld',
    res
);

try {
    const res = toCamelCase(1);
} catch (error) {
    console.log(
        'toCamelCase(1) should throw an error"',
        error !== undefined,
        error
    );
}
