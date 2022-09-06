import { NativeModules } from 'react-native';

/**
 * Determimes if the ExternalAPI native module is available.
 *
 * @returns {boolean} If yes {@code true} otherwise {@code false}.
 */
export function isExternalAPIAvailable() {
    const { ExternalAPI } = NativeModules;

    if (ExternalAPI === null) {
        return false;
    }

    return true;
}
