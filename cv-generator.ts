import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
  WidthType,
  Table,
  TableRow,
  TableCell,
  BorderStyle
} from "docx";
const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@docx.com";

export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create([experiences, educations, skills, achivements]): Document {
    const document = new Document({
      creator: "Gabriel Scatamburlo",
      description: "teste",
      title: "teste",
      styles: {
        paragraphStyles: [
          {
            id: "title",
            name: "title",
            basedOn: "Normal",
            next: "Normal",
            run: {
              color: "000000",
              size: 48
            }
          },
          {
            id: "greyText",
            name: "greyText",
            basedOn: "Normal",
            next: "Normal",
            run: {
              color: "999999"
            }
          }
        ]
      }
    });

    const onlyTopBorder = {
      top: {
        style: BorderStyle.SINGLE,
        size: 20,
        color: "6562FF"
      },
      left: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      },
      bottom: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      },
      right: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      }
    };

    const noBorders = {
      top: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      },
      left: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      },
      bottom: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      },
      right: {
        style: BorderStyle.NONE,
        size: 0,
        color: "6562FF"
      }
    };

    document.addSection({
      children: [
        new Table({
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "Thayane Minervi",
                          allCaps: true,
                          font: {
                            name: "Calibri"
                          }
                        })
                      ],
                      style: "title"
                    })
                  ],
                  borders: onlyTopBorder
                })
              ]
            }),
            new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "RUA MADALENA HAU, 410, ITAPOÁ, SC",
                          allCaps: true,
                          font: {
                            name: "Calibri"
                          }
                        })
                      ],
                      style: "greyText"
                    })
                  ],
                  borders: noBorders
                })
              ]
            })
          ],
          width: {
            size: 9070,
            type: WidthType.DXA
          }
        })
      ]
    });

    return document;
  }
}
