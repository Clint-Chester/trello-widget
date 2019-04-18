// createElement is what we'll use to create our component under test
import { createElement } from "lwc";
// trelloWidget is the component being tested
import trelloWidget from "c/trelloWidget";
import { loadScript } from "lightning/platformResourceLoader";

describe("Trello Widget", () => {
    it("has loaded the Trello Embed JavaScript resource", () => {
        // Given
        const TRELLOEMBED_JS = "trelloEmbed";
        const element = createElement("c-trello-widget", { is: trelloWidget });
        // When
        element.displayOption = "Trello Board";
        element.url = "https://trello.com/b/hjriw32";
        document.body.appendChild(element);
        // Then
        // Validation that the loadScript promise is called once.
        expect(loadScript.mock.calls.length).toBe(1);
        // Validation that the trelloEmbed static resource is passed as parameter.
        expect(loadScript.mock.calls[0][1]).toEqual(TRELLOEMBED_JS);
    });
    it("has a container to embed a Trello Board or Card", () => {
        // Given
        const element = createElement("c-trello-widget", { is: trelloWidget });
        // When
        element.displayOption = "Trello Board";
        element.url = "https://trello.com/b/hjriw32";
        document.body.appendChild(element);
        // Then
        const trelloContainer = element.shadowRoot.querySelector("div");
        expect(trelloContainer).not.toBeNull();
    });
    it("is centred", () => {
        // Given
        const element = createElement("c-trello-widget", { is: trelloWidget });
        // When
        element.displayOption = "Trello Board";
        element.url = "https://trello.com/b/hjriw32";
        document.body.appendChild(element);
        // Then
        const trelloContainer = element.shadowRoot.querySelector("div.slds-align_absolute-center");
        expect(trelloContainer).not.toBeNull();
    });
});