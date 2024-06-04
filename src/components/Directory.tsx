import { useState, useRef, useEffect } from 'react';
import { InstantSearch, ClearRefinements } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';

import PluginsCatalog from "./PluginsCatalog";

const searchClient = algoliasearch("SWCMJQWWC9", "7177f1ae5c3725e4c33f26a69eeeaa90");

const refinements = [
    {
        attribute: 'country',
        label: 'Country',
    },
    {
        attribute: 'activities.contributionType',
        label: 'Contribution Type',
    },
    {
        attribute: 'activities.linkedGSFProject',
        label: 'GSF Project',
    }

];

const Directory = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        }

        // Attach the click event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Remove event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="mb-10 w-full relative">
            <InstantSearch searchClient={searchClient} indexName="Plugins" future={{ preserveSharedStateOnUnmount: true }} routing={true} stalledSearchDelay={500}>
                <PluginsCatalog toggleFilter={() => setIsFilterOpen(prevState => !prevState)} />
            </InstantSearch >
        </div >
    );
};

export default Directory;