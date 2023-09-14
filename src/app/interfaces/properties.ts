import { SharedProperties } from "./shared";

export interface Property extends SharedProperties{
    address_id: string;
    updated_at: string;
    approved: boolean;
    hidden: boolean;
    expires_at: string;
    name: string;
    owner_id: string;
    manager_id: string;
    price_id: string;
    short_name: string;
    description: string;
}

export type Properties = Array<Property>