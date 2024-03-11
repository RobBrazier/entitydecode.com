import Alpine from 'alpinejs';
import he from "he";
import Plausible from "plausible-tracker";
const { trackPageview } = Plausible({
    apiHost: `${window.location.protocol}//${window.location.host}`
});

/**
 * @typedef {(input: T) => T} Processor
 * @template T
 */

/**
 * @param {Processor<string>[]} operations
 * @param {string} data
 * @param {string} operation
 * @returns {string}
 */
const performOperations = (operations, data, operation) => {
    let input = data;
    operations.forEach((func) => {
        try {
            input = func(input);
        }
        catch (e) {
            console.error(`unable to ${operation} ${data} due to ${e}`);
        }
    });
    return input;
};
Alpine.data("data", () => ({
    htmlEncode: true,
    urlDecode: true,
    encoded: "",
    decoded: "",
    focused: "",
    encode() {
        if (this.focused !== "decode") {
            return;
        }
        /** @type {Processor<string>[]} */
        const op = [];
        if (this.htmlEncode)
            op.push((data) => he.encode(data, { useNamedReferences: true }));
        this.encoded = performOperations(op, this.decoded, this.focused);
    },
    decode() {
        if (this.focused !== "encode") {
            return;
        }
        /** @type {Processor<string>[]} */
        const op = [];
        if (this.htmlEncode)
            op.push(he.decode);
        if (this.urlDecode)
            op.push(decodeURIComponent);
        this.decoded = performOperations(op, this.encoded, this.focused);
    },
}));
Alpine.start();
trackPageview();
