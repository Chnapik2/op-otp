import TOTPCodeModel from "../model/TOTPCodeModel";
import {Authenticator} from '@otplib/core';
import {createDigest, createRandomBytes} from "@otplib/plugin-crypto";
import {keyDecoder, keyEncoder} from "@otplib/plugin-thirty-two";

;

const TOTPCode = (code: TOTPCodeModel) => {
    const authenticator: any = new Authenticator({
        createDigest,
        createRandomBytes,
        keyDecoder,
        keyEncoder
    });

    const token = authenticator.generate(code.code);

    return (<>
        <div>{code.name}</div>
        <div>{token}</div>
    </>)
}

export default TOTPCode