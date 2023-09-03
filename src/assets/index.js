const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function generate() {
    let length =  Math.floor(Math.random()*12);
    let pass = "";
    for (let i = 0; i < length; i++){
        let char = Math.floor(Math.random()
            * chars.length + 1);
 
        pass += chars.charAt(char)
    }
    return pass;
}