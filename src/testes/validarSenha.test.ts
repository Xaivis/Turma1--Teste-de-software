import { describe, test, expect } from 'vitest'
function validarSenha(senha: string): boolean {
    if (senha.length < 6) {
        return false;
    }

    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    if (!/[0-9]/.test(senha)) {
        return false;
    }

    return true;
}
describe('Validação de senha', () => {
    describe('letras maiúsculas', () => {


        test('aceita maiúscula no início', () => {
            expect(validarSenha('Abc1234')).toEqual(true);
        });

        test('aceita maiúscula no meio', () => {
            expect(validarSenha('abC1234')).toEqual(true);
        });

        test('aceita maiúscula no final', () => {
            expect(validarSenha('abc123D')).toEqual(true);
        });

        test('aceita várias maiúsculas ', () => {
            expect(validarSenha('ABC1234')).toEqual(true);
        });

        test('rejeita sem maiúscula', () => {
            expect(validarSenha('abc1234')).toEqual(false);
        });
    })

    describe("validar Senha com quantidade diferente de caracteres", () => {


        test("Senha com exatamente 8 caracteres", () => {
            expect(validarSenha("123fds45")).toBe(false);
        });


        test("Senha com 6 caracteres", () => {
            expect(validarSenha("fiE876")).toBe(true);
        });


        test("Senha com 10 caracteres", () => {
            expect(validarSenha("15sdf47f89")).toBe(false);
        });

    });

    describe('apenas números', () => {
        test('rejeita números sequenciais sem letra maiúscula', () => {
            expect(validarSenha('123456')).toBe(false);
        });

        test('rejeita números repetidos sem letra maiúscula', () => {
            expect(validarSenha('222222')).toBe(false);
        });

        test('rejeita números aleatórios sem letra maiúscula', () => {
            expect(validarSenha('246859')).toBe(false);
        });

        test('rejeita menos de 6 números', () => {
            expect(validarSenha('123')).toBe(false);
        });

        test('aceita mais de 6 números', () => {
            expect(validarSenha('23456890')).toBe(false);
        });
    });

    describe('campo vazio', () => {


        test('rejeita campo totalmente vazio', () => {
            expect(validarSenha('')).toEqual(false);
        });

        test('rejeita apenas espaços em branco', () => {
            expect(validarSenha('      ')).toEqual(false);
        });

        test('rejeita string com quebra de linha', () => {
            expect(validarSenha('\n')).toEqual(false);
        });

        test('rejeita string com tabulação', () => {
            expect(validarSenha('\t')).toEqual(false);
        });
    });

    describe("Caracteres especiais na senha", () => {


        test('Diferentes caracteres especiais', () => {
            expect(validarSenha('12AB&\n')).toBeTruthy()
        })


        test('Apenas caracteres especiais', () => {
            expect(validarSenha('@#$@#$>\n')).toBeFalsy()
        })
    })


})