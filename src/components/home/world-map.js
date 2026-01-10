"use client";
import React, { memo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { name: "USA", coordinates: [-95.7129, 37.0902], flag: "us" }, // Center US
    { name: "Canada", coordinates: [-106.3468, 56.1304], flag: "ca" },
    { name: "Mexico", coordinates: [-102.5528, 23.6345], flag: "mx" },
    { name: "Panama", coordinates: [-80.7821, 8.5380], flag: "pa" },
    { name: "Jamaica", coordinates: [-77.2975, 18.1096], flag: "jm" },
    { name: "Denmark", coordinates: [9.5018, 56.2639], flag: "dk" },
    { name: "Germany", coordinates: [10.4515, 51.1657], flag: "de" },
    { name: "UAE", coordinates: [53.8478, 23.4241], flag: "ae" },
    { name: "Qatar", coordinates: [51.1839, 25.3548], flag: "qa" },
    { name: "South Africa", coordinates: [22.9375, -30.5595], flag: "za" },
    { name: "Australia", coordinates: [133.7751, -25.2744], flag: "au" },
    { name: "Brazil", coordinates: [-51.9253, -14.2350], flag: "br" },
];

const WorldMap = () => {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative font-sans">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 110, center: [20, 10] }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#112A4E"
                                stroke="#1B3B6F"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "#1B3B6F", outline: "none", transition: "all 250ms" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, flag }) => (
                    <Marker key={name} coordinates={coordinates} id="map-marker">
                        <g
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={name}
                            className="cursor-pointer group hover:z-50" // z-50 to bring to front on hover if possible, though SVG z-index is order based
                        >
                            {/* Pin Shape */}
                            {/* Shadow */}
                            <ellipse cx="0" cy="18" rx="8" ry="4" fill="rgba(0,0,0,0.5)" opacity="0.4" className=" group-hover:opacity-60 transition-opacity" />

                            {/* Pin Body - Animated on hover */}
                            <g className="group-hover:-translate-y-2 transition-transform duration-300 ease-in-out origin-bottom">
                                {/* Pin Head (Flag Circle) */}
                                <circle r="14" fill="#FFF" stroke="#2563EB" strokeWidth="2" />
                                <foreignObject x="-14" y="-14" width="28" height="28" mask="url(#circleMask)">
                                    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
                                        <img
                                            src={`https://flagcdn.com/w80/${flag}.png`}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                            style={{ minWidth: "100%", minHeight: "100%" }}
                                        />
                                    </div>
                                </foreignObject>

                                {/* Pin Needle */}
                                <path d="M 0,14 Q 0,25 0,30" stroke="#2563EB" strokeWidth="2" fill="none" />
                            </g>
                        </g>
                    </Marker>
                ))}
            </ComposableMap>

            <Tooltip
                id="my-tooltip"
                className="!bg-[#0A142F] !text-white !px-3 !py-1 !rounded-md !text-sm !border !border-blue-500/50 !shadow-xl !opacity-100"
                place="top"
                offset={10}
            />
        </div>
    );
};

export default memo(WorldMap);
