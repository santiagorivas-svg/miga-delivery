/**
 * ============================================================================
 * GUÍA PARA DILAN: COLA DE PEDIDOS EN COCINA (QUEUE - FIFO)
 * ============================================================================
 * 
 * OBJETIVO:
 * Gestionar las órdenes de comida en el orden exacto en que ingresan.
 * El primer pedido que realiza un cliente es el primero en ser despachado (FIFO).
 * 
 * INSTRUCCIONES DE IMPLEMENTACIÓN:
 * 
 * 1. MÉTODO enqueue(item):
 *    - Recibe un objeto de pedido y lo coloca al final de la cola.
 *    - Puedes usar el método nativo de arreglos .push(item) sobre 'this.items'.
 * 
 * 2. MÉTODO dequeue():
 *    - Remueve y retorna el primer elemento de la cola (el que está en el índice 0).
 *    - Puedes usar el método nativo .shift() o gestionar los índices manualmente.
 *    - Retorna undefined si la cola está vacía.
 * 
 * 3. MÉTODOS COMPLEMENTARIOS:
 *    - peek(): Muestra el primer pedido sin eliminarlo (this.items[0]).
 *    - isEmpty(): Retorna true si this.items.length === 0.
 * ============================================================================
 */

export class Queue<T> {
  private items: T[] = [];

  // TODO (Dilan): Insertar pedido al final de la cola
  enqueue(item: T): void {
    // Escribe tu código aquí:
  }

  // TODO (Dilan): Retirar y retornar el primer pedido
  dequeue(): T | undefined {
    // Escribe tu código aquí:
    return undefined;
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getItems(): T[] {
    return this.items;
  }

  size(): number {
    return this.items.length;
  }
}