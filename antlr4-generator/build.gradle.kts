plugins {
  id("antlr")
}

repositories {
  mavenCentral()
}

dependencies {
  antlr("org.antlr:antlr4:4.9.3")
  implementation("org.antlr:antlr4-runtime:4.9.3")
}

tasks.named<AntlrTask>("generateGrammarSource") {
  arguments = listOf("-visitor", "-long-messages", "-Dlanguage=JavaScript")
  outputDirectory = File("../src/app/backend/generated/")
}
