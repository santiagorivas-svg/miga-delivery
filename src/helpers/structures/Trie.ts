export class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
  data: any = null;
}

export class Trie {
  root: TrieNode = new TrieNode();

  // TODO (Alejandro): Insertar la palabra caracter por caracter en el Trie
  insert(word: string, data: any): void {
    // TODO: Implementar lógica de inserción
    throw new Error("TODO (Alejandro): Método insert en Trie sin implementar");
  }

  // TODO (Alejandro): Buscar todos los productos que inicien con el prefijo dado
  searchPrefix(prefix: string): any[] {
    // TODO: Implementar recorrido de nodos por prefijo
    console.warn("TODO (Alejandro): Retornando arreglo vacío provisional");
    return [];
  }
}