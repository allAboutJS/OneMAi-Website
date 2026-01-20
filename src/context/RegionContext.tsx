import React, { createContext, useContext, useEffect, useState } from 'react';
import { Region, RegionData, REGIONS } from '@/config/regions';

interface RegionContextType {
    region: Region;
    regionData: RegionData;
    setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [region, setRegionState] = useState<Region>('GLOBAL');

    const detectRegion = (): Region => {
        // Check for query param override first
        const urlParams = new URLSearchParams(window.location.search);
        const regionParam = urlParams.get('region')?.toUpperCase();
        if (regionParam === 'EU' || regionParam === 'NG' || regionParam === 'GLOBAL') {
            return regionParam as Region;
        }

        const { hostname } = window.location;
        if (hostname.endsWith('.eu')) return 'EU';
        if (hostname.endsWith('.ng')) return 'NG';
        if (hostname.endsWith('.com')) return 'GLOBAL';

        // Default for development or other domains
        return 'GLOBAL';
    };

    useEffect(() => {
        setRegionState(detectRegion());
    }, []);

    const setRegion = (newRegion: Region) => {
        setRegionState(newRegion);
    };

    const regionData = REGIONS[region];

    return (
        <RegionContext.Provider value={{ region, regionData, setRegion }}>
            {children}
        </RegionContext.Provider>
    );
};

export const useRegion = () => {
    const context = useContext(RegionContext);
    if (context === undefined) {
        throw new Error('useRegion must be used within a RegionProvider');
    }
    return context;
};
