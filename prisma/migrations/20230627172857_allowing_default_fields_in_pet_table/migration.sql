-- AlterTable
ALTER TABLE `pets` MODIFY `age` ENUM('CUB', 'MIDDLE_AGE', 'OLD') NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `color` VARCHAR(191) NULL,
    MODIFY `animal_size` ENUM('SMALL', 'MEDIUM', 'BIG', 'EXTRA_BIG') NULL,
    MODIFY `energy_level` ENUM('LOW', 'MEDIUM', 'HIGH') NULL,
    MODIFY `type` ENUM('CAT', 'DOG') NULL,
    MODIFY `independence_level` ENUM('LOW', 'MEDIUM', 'HIGH') NULL;
