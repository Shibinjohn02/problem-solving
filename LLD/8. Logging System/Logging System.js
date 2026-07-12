class Log {
    constructor(level, message) {
        this.level = level;
        this.message = message;
        this.timestamp = new Date();
    }
}

class ConsoleDestination {
    write(log) {
        console.log(
            `[${log.timestamp.toLocaleTimeString()}] [${log.level}] ${log.message}`
        );
    }
}

class FileDestination {
    write(log) {
        console.log(
            `(Writing to file) [${log.level}] ${log.message}`
        );
    }
}

class Logger {
    constructor(destinations = []) {
        this.destinations = destinations;
    }

    log(level, message) {
        const log = new Log(level, message);

        for (const destination of this.destinations) {
            destination.write(log);
        }
    }

    info(message) {
        this.log("INFO", message);
    }

    error(message) {
        this.log("ERROR", message);
    }

    warning(message) {
        this.log("WARNING", message);
    }
}


// ---------------- MAIN ----------------

function main() {
    const consoleDest = new ConsoleDestination();
    const fileDest = new FileDestination();

    const logger = new Logger([
        consoleDest,
        fileDest
    ]);

    logger.info("Server started");
    logger.warning("Memory usage high");
    logger.error("Database connection failed");
}

main();