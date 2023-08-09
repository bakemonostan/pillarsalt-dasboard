import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useState } from 'react';
import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';

const icon = new L.Icon({
    iconUrl: "./marker.png",
    iconSize: new L.Point(25, 41),
    iconAnchor: [13, 41],
});


export default function BranchLocation() {
    const location: LatLngExpression = [6.6018, 3.3515];
    return (
        <>
            <div className='justify-between hidden pb-8 lg:flex items center'>
                <div>
                    <h1 className='text-2xl font-bold text-headers'>Branch Mapping</h1>
                </div>
                {/* <div>
                    <Button
                        label='Branch Request'
                        type='button'
                        variant='primary'
                    />
                </div> */}
            </div>
            <div className='relative w-full h-screen mx-auto lg:flex lg:flex-row-reverse lg:bg-white lg:p-5 lg:rounded-md'>

                <div className='w-full absolute lg:w-[30%] top-5 z-50 px-5 lg:relative lg:top-0'>
                    <Input type='search' onchange={() => { }}
                        placeholder='Search branches' value=''
                    />
                </div>

                <div className='w-full h-full lg:w-[70%]'>
                    <MapContainer
                        center={location}
                        zoom={10}
                        scrollWheelZoom={false}
                        className='relative z-10 w-full h-full lg:block '
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={location} icon={icon} />
                    </MapContainer>
                </div>

            </div>
        </>
    )
}