import { addKeyword, EVENTS } from '@builderbot/bot';

const welcomeFlow = addKeyword(EVENTS.ACTION)
    .addAction(async (ctx, ctxFn) => {
        await ctxFn.endFlow("Bienvenido al chatbot de AIPaths! Hace una consulta.");
    });

export { welcomeFlow };