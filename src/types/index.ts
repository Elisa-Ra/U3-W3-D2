export interface APIData {
    count:    number;
    next:     string;
    previous: null;
    results:  Article[];
}

export interface Article {
    id:           number;
    title:        string;
    authors:      Author[];
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     unknown[];
    events:       unknown[];
}

export interface Author {
    name:    string;
    socials: null;
}
