package com.cv_generator.utils;

import com.cv_generator.exceptions.NotCompletePdfGenerationException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.tomcat.util.codec.binary.Base64;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class PdfGenerator {
    private static final float MARGIN_VALUE = 50;
    
    private static final float LEADING_VALUE = 20;
    
    private static final float LINE_HEIGHT_VALUE = 14;
    
    private static final float MAX_WIDTH_VALUE = 500;
    
    private static final float FONT_SIZE_VALUE = 12;
    
    private static final float TITLE_FONT_SIZE_VALUE = 16;
    
    private static final float SECTION_FONT_SIZE_VALUE = 14;
    
    private static final float INITIAL_Y_POSITION_VALUE = 750;
    
    private static final float FONT_SCALING_FACTOR_VALUE = 1000;

    public static String generateBase64Pdf(String content) {
        byte[] pdfBytes = PdfGenerator.generatePdf(content);

        return Base64.encodeBase64String(pdfBytes);
    }

    private static byte[] generatePdf(String content) {
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage();
            document.addPage(page);

            try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, TITLE_FONT_SIZE_VALUE);

                contentStream.beginText();
                contentStream.newLineAtOffset(MARGIN_VALUE, INITIAL_Y_POSITION_VALUE);

                String[] sections = content.split("; ");
                for (String section : sections) {
                    String[] parts = section.split(": ", 2);
                    if (parts.length == 2) {
                        contentStream.setFont(PDType1Font.HELVETICA_BOLD, SECTION_FONT_SIZE_VALUE);
                        contentStream.showText(parts[0] + ":");
                        contentStream.newLineAtOffset(0, -LEADING_VALUE);

                        contentStream.setFont(PDType1Font.HELVETICA, FONT_SIZE_VALUE);
                        List<String> wrappedText = wrapText(parts[1], PDType1Font.HELVETICA, FONT_SIZE_VALUE);
                        for (String line : wrappedText) {
                            contentStream.showText(line);
                            contentStream.newLineAtOffset(0, -LINE_HEIGHT_VALUE);
                        }
                        contentStream.newLineAtOffset(0, -LEADING_VALUE);
                    }
                }
                contentStream.endText();
            }

            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            document.save(byteArrayOutputStream);

            return byteArrayOutputStream.toByteArray();

        } catch (IOException e) {
            throw new NotCompletePdfGenerationException("Error generating PDF", e);
        }
    }

    private static List<String> wrapText(String text, PDFont font, float fontSize) throws IOException {
        List<String> wrappedLines = new ArrayList<>();
        StringBuilder currentLine = new StringBuilder();

        String[] words = text.split("\\s+");

        for (String word : words) {
            float wordWidth = font.getStringWidth(word) / FONT_SCALING_FACTOR_VALUE * fontSize;
            float currentLineWidth = font.getStringWidth(currentLine.toString()) / FONT_SCALING_FACTOR_VALUE * fontSize;

            if (currentLineWidth + wordWidth > MAX_WIDTH_VALUE) {
                wrappedLines.add(currentLine.toString().trim());
                currentLine = new StringBuilder(word);
            } else {
                if (!currentLine.isEmpty()) {
                    currentLine.append(" ");
                }
                currentLine.append(word);
            }
        }

        if (!currentLine.isEmpty()) {
            wrappedLines.add(currentLine.toString().trim());
        }

        return wrappedLines;
    }
}
