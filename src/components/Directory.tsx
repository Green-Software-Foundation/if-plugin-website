import { InstantSearch } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';

import PluginsCatalog from "./PluginsCatalog";

const searchClient = algoliasearch("SWCMJQWWC9", "7177f1ae5c3725e4c33f26a69eeeaa90");

const Directory = () => {

    return (
        <div className="mb-10 w-full relative">
            <InstantSearch searchClient={searchClient} indexName="Plugins" future={{ preserveSharedStateOnUnmount: true }} routing={true} stalledSearchDelay={500}>
                <PluginsCatalog />
            </InstantSearch >
        </div >
    );
};

export default Directory;