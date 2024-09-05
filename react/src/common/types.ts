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

export enum EnumClade {
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

export interface Prevalence {
    taxonNo: number
    taxonName: string
    taxonRank: string
    imageNo: number
    numOccurances: number
}

export interface PrevalenceJSON {
    taxon_no: number
    taxon_name: string
    taxon_rank: string
    image_no: number
    num_occurances: number
}


export interface Diversity {
    "intervalNo": number
    "intervalName": string,
    "maxMya": number,
    "minMya": number,
    "xFt": number,
    "xBL": number,
    "xFL": number,
    "xBt": number,
    "sampledInBin": number,
    "impliedInBin": number,
    "numOccurances": number
}

export interface DiversityJSON {
    "interval_no": number
    "interval_name": string,
    "max_mya": number,
    "min_mya": number,
    "x_Ft": number,
    "x_bL": number,
    "x_FL": number,
    "x_Bt": number,
    "sampled_in_bin": number,
    "implied_in_Bin": number,
    "num_occs": number
}
export interface Taxa {
    "taxonNo": number,
    "recordType": string,
    "taxonRank": string,
    "taxonName": string,
    "taxonAttr": string,
    "acceptedNo": number,
    "acceptedRank": string,
    "acceptedName": string,
    "parentNo": number,
    "referenceNo": number,
    "isExtant": string,
    "numOccurances": number
}
export interface TaxaJSON {
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
    "occurrenceNo": number,
    "recordType": string,
    "collectionNo": number,
    "identifiedName": string,
    "identifiedRank": string,
    "identifiedNo": number,
    "acceptedName": string,
    "acceptedRank": string,
    "acceptedNo": number,
    "earlyInterval": string,
    "lateInterval": string,
    "maxMya": number,
    "minMya": number,
    "referenceNo": number,
    "cc": string
    "latlngBasis": string,
    "latlngPrecision": number,
    "geogscale": string
    "phylum": EnumPhylums,
    "cladeClass": string,
    "cladeOrder": "Cetacea",
    "family": "NO_FAMILY_SPECIFIED",
    "genus": string
}
export interface Interval {
    intervalNo: number;
    recordType: EnumIntervalType;
    intervalName: string;
    abbrv: string;
    parentNo: number;
    color: string;
    tAge: number;
    bAge: number;
    referenceNo: number;
}
export interface IntervalJSON {
    interval_no: number;
    record_type: EnumIntervalType;
    interval_name: string;
    abbrv: string;
    parent_no: number;
    color: string;
    t_age: number;
    b_age: number;
    reference_no: number;
}
export interface Occurance {
    //[TODO] add after interval is ready
    // occuranceNo:Number;
    // genus:string;
    // family:string;
}

export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }
  interface ChartDataItem {
    category: string;
    value: number;
  }
  
