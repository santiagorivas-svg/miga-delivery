
export class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
  data: any = null;
}

export class Trie {
  root: TrieNode = new TrieNode();

  // Insertar la palabra caracter por caracter en el Trie
  insert(word: string, data: any = null): void {
    let current = this.root;
    const lowerWord = word.toLowerCase();

    for (const char of lowerWord) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }

      current = current.children[char];
    }

    current.isEndOfWord = true;
    current.data = data;
  }

  // Buscar todos los productos que inicien con el prefijo dado
  searchPrefix(prefix: string): any[] {
    let current = this.root;
    const lowerPrefix = prefix.toLowerCase();

    // Recorrer el Trie hasta encontrar el prefijo
    for (const char of lowerPrefix) {
      if (!current.children[char]) {
        return [];
      }

      current = current.children[char];
    }

    // Recopilar los productos que coinciden con el prefijo
    const results: any[] = [];

    const collectWords = (node: TrieNode) => {
      if (node.isEndOfWord && node.data !== null) {
        results.push(node.data);
      }

      for (const char in node.children) {
        collectWords(node.children[char]);
      }
    };

    collectWords(current);

    return results;
  }
}
