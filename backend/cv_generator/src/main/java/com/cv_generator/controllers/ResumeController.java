package com.cv_generator.controllers;

import com.cv_generator.enums.Language;
import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.InitializationResponse;
import com.cv_generator.responses.GenerationResponse;
import com.cv_generator.services.ResumeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class ResumeController {
    private final ResumeService resumeService;

    @PostMapping("createResume/fromScratch")
    @Operation(summary = "Start creating CV from scratch",
            description = "This method initializes new chat and allows creating CV from scratch")
    @ApiResponse(responseCode = "200", description = "Successful response",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = InitializationResponse.class)))
    public ResponseEntity<InitializationResponse> startResumeCreation() {
        return ResponseEntity.ok(resumeService.initiateChatFromScratch(Language.en.toString())); // For current version of the project english is set by default
    }

    @PostMapping("/message/{chatId}")
    @Operation(summary = "Send message",
            description = "Sends a message in an existing chat session and returns a response")
    @ApiResponse(responseCode = "200", description = "Successful response",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = GenerationResponse.class)))
    public ResponseEntity<GenerationResponse> sendMessage(@PathVariable String chatId, @RequestBody MessageRequest request) {
        return ResponseEntity.ok(resumeService.processMessage(UUID.fromString(chatId), request));
    }


    @GetMapping("/download/{chatId}")
    @Operation(summary = "Download resume", description = "Downloads the resume as a PDF file",
            responses = {@ApiResponse(responseCode = "200", description = "PDF downloaded",
                    content = @Content(mediaType = "application/pdf"))})
    public ResponseEntity<byte[]> downloadResume(@PathVariable String chatId, @RequestParam String lang) {
        String pdfBase64 = resumeService.getResumePdf(UUID.fromString(chatId), lang);

        byte[] pdfBytes = Base64.getDecoder().decode(pdfBase64);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "resume.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }
}
