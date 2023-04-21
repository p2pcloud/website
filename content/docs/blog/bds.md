---
title: "The Possible OVMF vulnerability in BDS phase"
description: "The OVMF default recovery may select, load and run a malicious EFI application or kernel if unable to direct boot the guest owner kernel"
weight: 3040
---

AMD EPYC Processors is a nice technology, but it runs a software written by other people, which may contain own security vulnerabilities.

In our system we use direct kernel boot to load and run the Linux kernel: the QEMU hypervisor loads the kernel and runs OVMF firmware, the OVMF firmware runs the kernel etc.

The OVMF firmware is an implementation of UEFI, it is a complex and smart software, which tries to do its best to find, load and run the kernel. If it was unable to use direct kernel boot, then it will try to update BDS (boot device selection) sequence to find and run platform recovery, if there is not the platform recovery, then it will run the default recovery from any connected drive.

Unfortunately, it is possible to cook and inject a special secret data via SEV API, which will corrupt memory and confuse the OVMF (we did not discover the source of the corruption yet - it may be the QEMU, OVMF or AMD-SP itself), after this the firmware will switch to BDS phase, which will enter to recovery mode and may run an arbitrary EFI application from any connected drive, which will run in the SVM context after the attestation process finished.

We have mitigated this vulnerability by stopping BDS phase and dying just right after any direct kernel boot error in the default OvmfPkg/AmdSev platform boot manager (PlatformBootManagerLibGrub). Well, it is not a very elegant solution, but it is better to die than be vulnerable.

Discovered in OvmfPkg/AmdSev package in edk2-stable202211 and edk2-stable202302, when OvmfPkg/AmdSev/Grub package disabled.