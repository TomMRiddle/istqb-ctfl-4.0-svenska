export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  version: number;
  synonyms?: string[];
  reference?: string;
  abbreviation?: string;
  seeAlso?: string[];
}

export interface SyllabusChapter {
  id: string;
  title: string;
  filePath: string;
}
