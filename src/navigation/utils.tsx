interface HeaderOptions {
  title: string;
  headerStyle: any;
}

export const setHeaderOptions = (ScreenName: string): HeaderOptions => ({
  title: ScreenName,
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
