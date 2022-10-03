import { Injectable } from '@angular/core';

/**
 *
 */
@Injectable()
export class ConsoleService {
    /**
     *
     * @param message
     */
    public warn(message: string) {
        // eslint-disable-next-line no-console
        console.warn(message);
    }
}
