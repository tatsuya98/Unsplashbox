import seed from "./seed";
import db from "./connection"
const runSeed = async () => {
    await seed();
    return db.end;
}

runSeed();