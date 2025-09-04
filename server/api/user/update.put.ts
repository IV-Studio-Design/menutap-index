import { updateUser } from "~/server/repository/user";
import { UserProps } from "~/types/UserProps";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    const {id, name, email, password}: UserProps  = await readBody(event);

    const saltRounds: number = 10

    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHashed = await bcrypt.hash(password, salt);

    const userUpdated = await updateUser({
        id: id,
        name: name,
        email: email,
        password: passwordHashed
    });

    setResponseStatus(event, 200, "Ok");
    return {
        message: "Conta atualizada com sucesso!",
        data: userUpdated
    }
});