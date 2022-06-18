declare module ModelGetMedicalProceduresReponse {

  export interface Datum {
      id: number;
      name: string;
      name_en: string;
  }

  export interface Link {
      url: string;
      label: string;
      active: boolean;
  }

  export interface IRootObject {
      status: boolean;
      current_page: number;
      data: Datum[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: Link[];
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url?: any;
      to: number;
      total: number;
  }

}

