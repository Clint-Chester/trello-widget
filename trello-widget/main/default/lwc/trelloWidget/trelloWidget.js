import { LightningElement, api } from 'lwc';
import trello from '@salesforce/resourceUrl/trelloEmbed';
import { loadScript } from 'lightning/platformResourceLoader';

export default class TrelloWidget extends LightningElement {
    @api url;
    @api displayOption;

    renderedCallback() {
        Promise.all([loadScript(this, trello)])
                .then(() => { 
                    switch(this.displayOption) {
                        case "Trello Board":
                            this.createTrelloBoard();
                            break;
                        case "Trello Card":
                            this.createTrelloCard(false);
                            break;
                        default:
                            //This implies 'Trello Card Compact' has been set since the restricted picklist options
                            this.createTrelloCard(true);
                    }
                });
    }

    createTrelloBoard() {
        window.TrelloBoards.create(this.url, this.template.querySelector("div"));
    }

    createTrelloCard(compactSetting) {
        window.TrelloCards.create(this.url, this.template.querySelector("div"), {
            compact: compactSetting
        });
    }
}