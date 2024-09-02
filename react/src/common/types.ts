export enum EnumIntervalType {
    EON = "Eon",
    ERA = "Era",
    PERIOD = "Period",
    EPOCH = "Epoch",
    AGE = "Age",

}

export enum EnumDomains {
    EUKARYA = "Eukarya",
    BACTERIA = "Bacteria",
    ARCHAEA = "Archaea",
}

export enum EnumKingdoms {
    ANIMALIA = "Animalia",
    PLANTAE = "Plantae",
    FUNGI = "Fungi",
    PROTISTA = "Protista",
    MONERA = "Monera",
}

export enum EnumClades {
    DOMAIN = "Domain",
    KINGDOM = "KingdoM",
    PYHLUM = "Pyhylum",
    CLASS = "Class",
    ORDER = "Order",
    FAMILY = "Family",
    GENUS = "Genus",
    SPECIES = "Species",

}
export enum EnumPhylums {
    CHORDATA = "Chordata",
    ARTHROPODA = "Arthropoda",
    MOLLUSCA = "Mollusca",
    ECHINODERMATA = "Echinodermata",
    CNIDARIA = "Cnidaria",
    PORIFERA = "Porifera",
    PLANTAE = "Plantae",
    FUNGI = "Fungi",
    PROTISTA = "Protista",
    MONERA = "Monera",
}

export enum AnimalClade {
    Mammalia = "Mammalia",
    Aves = "Aves",
    Reptilia = "Reptilia",
    Amphibia = "Amphibia",
    Pisces = "Pisces",
    Insecta = "Insecta",
    Arachnida = "Arachnida",
    Crustacea = "Crustacea",
    Annelida = "Annelida",
    Chordata = "Chordata",
    Arthropoda = "Arthropoda",
    Mollusca = "Mollusca",
    Echinodermata = "Echinodermata",
    Cnidaria = "Cnidaria",
    Porifera = "Porifera",
    Platyhelminthes = "Platyhelminthes",
    Nematoda = "Nematoda"
}
export interface Diversity {
    "interval_no": number
    "interval_name": string,
    "max_ma": number,
    "min_ma": number,
    "X_Ft": number,
    "X_bL": number,
    "X_FL": number,
    "X_bt": number,
    "sampled_in_bin": number,
    "implied_in_bin": number,
    "n_occs": number
}
export interface Taxa {
    "taxon_no": number,
    "record_type": string,
    "taxon_rank": string,
    "taxon_name": string,
    "taxon_attr": string,
    "accepted_no": number,
    "accepted_rank": string,
    "accepted_name": string,
    "parent_no": number,
    "reference_no": number,
    "is_extant": string,
    "n_occs": number
}
export interface Occurrence {
    "occurrence_no": number,
    "record_type": string,
    "collection_no": number,
    "identified_name": string,
    "identified_rank": string,
    "identified_no": number,
    "accepted_name": string,
    "accepted_rank": string,
    "accepted_no": number,
    "early_interval": string,
    "late_interval": string,
    "max_ma": number,
    "min_ma": number,
    "reference_no": number,
    "cc": string
    "latlng_basis": string,
    "latlng_precision": number,
    "geogscale": string
    "phylum": EnumPhylums,
    "class": string,
    "order": "Cetacea",
    "family": "NO_FAMILY_SPECIFIED",
    "genus": string
}
export interface Interval {
    id: number;
    recordType: EnumIntervalType;
    intervalName: string;
    abbrv: string;
    parentNo: number;
    color: string;
    tAge: number;
    bAge: number;
    referenceNo: number;
}
export interface Occurance {
    //[TODO] add after interval is ready
    // occuranceNo:Number;
    // genus:string;
    // family:string;
}
