
export interface DocumentList {
  current_page: number;
  data: Document[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  pages: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface Document {
  id: number;
  document: string;
  title: string;
  date: string;
  created_at: string;
  updated_at: string;
}