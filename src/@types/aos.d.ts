declare module 'aos' {
    interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    declare function init(options?: AosOptions): void;
    declare function refresh(): void;
  
    export = {
      init,
      refresh,
    };
  }