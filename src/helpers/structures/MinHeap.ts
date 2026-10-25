export interface DriverItem {
  id: string;
  name: string;
  dist: string;
  vehicle: string;
}

export interface HeapNode {
  priority: number; // Distancia en km (menor número = mayor prioridad)
  data: DriverItem;
}

/**
 * ============================================================================
 * GUÍA PARA DILAN: MÓDULO DE REPARTIDORES (MIN HEAP / MONTÍCULO BINARIO)
 * ============================================================================
 * 
 * OBJETIVO:
 * Mantener a los repartidores ordenados por cercanía. El repartidor con menor
 * distancia (menor prioridad) SIEMPRE debe quedar en la raíz (índice 0).
 * 
 * INSTRUCCIONES DE IMPLEMENTACIÓN:
 * 
 * 1. MÉTODOS AUXILIARES SUGERIDOS:
 *    - getParentIndex(i): Math.floor((i - 1) / 2)
 *    - getLeftChildIndex(i): 2 * i + 1
 *    - getRightChildIndex(i): 2 * i + 2
 *    - swap(i, j): Intercambiar elementos en this.heap[i] y this.heap[j]
 * 
 * 2. MÉTODO insert(priority, data):
 *    - Agrega el objeto { priority, data } al final del arreglo 'heap'.
 *    - Implementa 'bubbleUp()': Compara el nodo recién insertado con su padre.
 *      Si la prioridad del hijo es menor que la del padre, haz swap y repite
 *      el proceso subiendo por el árbol hasta restaurar la propiedad del MinHeap.
 * 
 * 3. MÉTODO extractMin():
 *    - Si el heap está vacío, retorna null.
 *    - Guarda el elemento raíz (this.heap[0]), que es el repartidor más cercano.
 *    - Mueve el último elemento del arreglo a la posición 0 (raíz) y haz .pop().
 *    - Implementa 'bubbleDown()': Compara la nueva raíz con sus dos hijos.
 *      Haz swap con el hijo que tenga MENOR prioridad. Repite el proceso
 *      bajando por el árbol hasta que el nodo sea menor que sus hijos.
 *    - Retorna el repartidor extraído.
 * ============================================================================
 */

export class MinHeap {
  private heap: HeapNode[] = [];

  // TODO (Dilan): Agregar elemento y reordenar hacia arriba (bubbleUp)
  insert(priority: number, data: DriverItem): void {
    // Escribe tu código aquí:
  }

  // TODO (Dilan): Extraer raíz y reordenar hacia abajo (bubbleDown)
  extractMin(): HeapNode | null {
    // Escribe tu código aquí:
    return null;
  }

  peek(): HeapNode | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  getItems(): HeapNode[] {
    return this.heap;
  }

  size(): number {
    return this.heap.length;
  }
}