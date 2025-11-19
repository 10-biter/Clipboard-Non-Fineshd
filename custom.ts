
/**
* Özel işlevler ve bloklar tanımlamak için bu dosyayı kullanın.
* https://makecode.microbit.org/blocks/custom adresinden daha fazla bilgi edinin
*/


/**
 * Custom blocks
 */
//% weight=100 color=#c7793e icon="\uf121"
namespace clipboard {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function copy(text: string ): void {
        let clip = text
    }


    export function paste(): void {
        basic.showString()
    }
}
