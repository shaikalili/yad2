export class Property{
    public doors:boolean;
    public garag:boolean;
    public elavetor:boolean;
    public ac:boolean;
    public balconi:boolean;
    public soragim:boolean;
    public machsan:boolean;
    public handicap:boolean;
    public restore:boolean;
    public fernicher:boolean;
    public exclusive:boolean;
    constructor(doors,garag,elavator,ac,balconi,soragim,machsan,handicap,restore,fernicher,exclusive){
      this.doors=doors;
      this.garag=garag;
      this.elavetor=elavator;
      this.ac=ac;
      this.balconi=balconi;
      this.soragim=soragim;
      this.machsan=machsan;
      this.handicap=handicap;
      this.restore=restore;
      this.fernicher=fernicher;
      this.exclusive=exclusive;
    }
}